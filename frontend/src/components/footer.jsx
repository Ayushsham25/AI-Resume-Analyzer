function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="w-full px-4 sm:px-6 lg:px-12 py-6">
                <p className="text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} AI CV Analyzer. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;