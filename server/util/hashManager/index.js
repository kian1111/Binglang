import bcrypt from 'bcryptjs';

const hash = async (passwordToHash) => {

    const salt = await bcrypt.genSalt(10);
    const newPass = await bcrypt.hash(passwordToHash,salt);

    return newPass;
}


const compare = async (rawPassword, hashedPassword) => {

    let match = await bcrypt.compare(rawPassword, hashedPassword);
    return match;
}


export default Object.freeze({
    hash,
    compare
});