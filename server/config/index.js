// import dotenv from 'dotenv';

// function makeConfig()
// {
//     dotenv.config();

//     return Object.freeze(
//     {
//         getPort: () => process.env.PORT || null,
//         getAuthSecret: () => process.env.AUTH_SECRET,
//         getSessionExpireTime: () => process.env.SESSION_EXPIRE_TIME
//     });
// }

// const config = makeConfig();

// export default config;

import dotenv from 'dotenv';

dotenv.config();

export default Object.freeze({
  getPort: () => process.env.PORT || 5000,
  getAuthSecret: () => process.env.AUTH_SECRET,
  getSessionExpireTime: () => process.env.SESSION_EXPIRE_TIME
});
