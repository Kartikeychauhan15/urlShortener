export const cookieOptions= {
    // expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
    
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Set to true in production
    sameSite: 'lax', // Helps prevent CSRF attacks
    maxAge: 60 * 60 * 1000 // 3 days in milliseconds
}