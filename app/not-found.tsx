import Link from "next/link";

export default function NotFound () {
  return (
    <div className="flex flex-col justify-center h-screen space-y-5 text-center">
      <h2 className="text-7xl font-bold text-blue-900">404</h2>
      <p>Sorry, the page you're looking for cannot be found</p>
      <p>
        Visit our &nbsp;
        <Link href="/" className="text-blue-500 underline">homepage</Link>, get&nbsp;
        <Link href="https://support.atlassian.com" className="text-blue-500 underline">help</Link>, or try searching
      </p>
    </div>
  );
};