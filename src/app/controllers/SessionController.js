import * as Yup from 'yup';
import User from '../models/User';


class SessionController {
    async store(request, response) {
        const schema = Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required()
        });

        const isValid = await schema.isValid(request.body);

        const emailorPassworIncorrect = () =>
            response.status(401).json({
                error: 'make sure your email or password are correct '
            });

        if (!isValid) {
            emailorPassworIncorrect();
        }

        const { email, password } = request.body;

        const user = await User.findOne({
            where: {
                email,
            },
        });
        if (!user) {
           emailorPassworIncorrect();
        }

        const isSamePassword = await user.checkPassword(password);

        if (!isSamePassword) {
            emailorPassworIncorrect();
        }

        return response.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin
        });
    }
}   


export default new SessionController();