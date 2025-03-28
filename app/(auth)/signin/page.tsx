export default function SigninPage() {
  return (

    <div className='min-h-screen flex flex-col items-center justify-center'>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-2 text-center text-2xl font-bold text-gray-900 dark:text-white">
          Sign In
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto w-full max-w-md">
        <div className="bg-white dark:bg-[#1A1A1A] w-full py-8 px-6 shadow rounded-lg border border-gray-100 dark:border-dark-border-subtle">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" name="email" id="email" className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-border-medium dark:bg-[#222222] dark:text-gray-100 dark:placeholder:text-gray-500" />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input type="password" name="password" id="password" className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-border-medium dark:bg-[#222222] dark:text-gray-100 dark:placeholder:text-gray-500" />
            </div>
            <div>
              <button type="submit" className="bg-gray-800 w-full cursor-pointer p-1 text-white rounded-md">Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}