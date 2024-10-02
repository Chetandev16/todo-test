const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
            <div className="max-w-md text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-xl mb-8">Oops! The page you`re looking for doesn`t exist.</p>
            </div>
        </div>
    )
}

export default NotFound