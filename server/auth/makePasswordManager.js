export default function makePasswordManager({hashManager})
{
    const hash = async (passwordToHash) => {

        const newPass = await hashManager.hash(passwordToHash);
        return newPass;
    }

    const verify = async (rawPassword, hashedPassword) => {
        
        let match = await hashManager.compare(rawPassword, hashedPassword);
        return match;
    }

    return Object.freeze({
        hash,
        verify
    })
}