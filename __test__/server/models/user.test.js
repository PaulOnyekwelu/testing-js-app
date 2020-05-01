/*
* @jest-environment node
*/

import User from '@models/User';
import mongoose from 'mongoose';
import Bcrypt from 'bcryptjs';


describe('User model', () => {
    it('should check if user password is hashed before saving to database', async () => {
        await mongoose.connect('mongodb://localhost:27017/testapp_test', { useNewUrlParser: true, useUnifiedTopology: true });

        const user = {
            name: 'test',
            email: 'test@gmail.com',
            password: 'password'
        }

        const createdUser = await User.create(user);
        expect(Bcrypt.compareSync(user.password, createdUser.password)).toBe(true);
        mongoose.connection.close();

    })
})