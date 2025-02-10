'use client';

//for any unexpected errors, this component will be rendered

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-red-900 mb-4">
                    Something went wrong!
                </h1>
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-600 transition-colors"
                >
                    Retry
                </button>
            </div>
        </div>
    );
}
