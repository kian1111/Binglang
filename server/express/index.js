import express from 'express'
import upload from 'express-fileupload'
import makeCallback from './express-callback.js'
import makeAuthMiddleware from './middleware/auth-middleware.js'

import makeAuthRoutes from './routes/auth-routes.js'
import makeWordRoutes from './routes/word-routes.js'
import makeTeacherRoutes from './routes/teacher-routes.js'
import makeSettingsRoutes from './routes/settings-route.js'

import { authManager } from '../auth/index.js'


export default function makeServer({config = null, indexPath = ''} = {})
{
    const app = express()
    const port = config.getPort() || 5000

    const authMiddleware = makeAuthMiddleware(authManager)

    app.use(upload())
    app.use(express.json({"type":"application/json"}))
    app.use(express.urlencoded({"extended": true, "type":"application/x-www-form-urlencoded"}))


    app.use("/api/auth", makeAuthRoutes({makeCallback, authMiddleware}))
    app.use("/api/word", makeWordRoutes({makeCallback, authMiddleware}))
    app.use("/api/teacher", makeTeacherRoutes({makeCallback, authMiddleware}))
    app.use("/api/settings", makeSettingsRoutes({makeCallback, authMiddleware}))




    

    // Serve static asset in production
    if (process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static('client/build'))
    
        app.get('*', (req, res) => {
        res.sendFile(indexPath)
        res.set('Content-Security-Policy', "default-src 'self'","font-src 'self'","img-src 'self'", "script-src 'self'","style-src 'self'", "frame-src 'self'")
        })
    }


    app.listen(port, () => console.log("Server started on port "+port))

    return app
}