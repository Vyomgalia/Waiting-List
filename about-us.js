import Link from 'next/link';

function AboutUsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p>
        This is where you would write about your brand, its mission, values, and
        any other relevant information.
      </p>
      <Link href="/" className="text-blue-500 underline">
        Back to Home
      </Link>
    </div>
  );
}

export default AboutUsPage;