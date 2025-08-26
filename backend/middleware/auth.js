// Put code here for the middleware to authenticate User requests if they have the token and check if it's a legit token

//Import the `jsonwebtoken`module for verifying and creating JWTs
import jwt from 'jsonwebtoken';

// Middleware function to verify the JSON Web Tokn (JWT)
const verifyToken = (req, res, next) => {
    // Extract the token from the Authorization header (if it exists)
    // "Bearer <Token>"
    const token = req.headers.authorization?.split(' ')[1];

    // If no token is provided, respond with a 401 Unauthorized status

    try {
        // Verify the token using the secret stored in the environment variable
        const decoded = jwt.verify(token, process.env.SUPABASE_JWT_SECRET);

        // Attach the decoded token payload (user information) to the request object
        req.user = decoded;

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        // If token verification fails, respond with a 401 Unauthorized status
        res.status(401).json({ error: 'Invalid token' });
    }
};

export default verifyToken;