import Image from "next/image";
import Link from "next/link";

const FeatureCard = ({ title, subtitle, btnTitle, imageUrl }: FeatureCard) => {
  return (
    <section className="max-w-5xl w-full px-5 pt-6 flex flex-col items-center space-y-2">
      <h2 className="text-xl lg:text-3xl font-bold py-5 text-center">{title}</h2>
      <p className="text-lg text-center">{subtitle}</p>
      <Link href="/https://www.atlassian.com/software/jira/guides/issues/overview#what-are-issue-types" className="text-blue-600 hover:text-blue-900 duration-300">{btnTitle}</Link>

      {imageUrl && (
        <Image
          src={imageUrl}
          width={2269}
          height={1860}
          alt={title}
          className="max-w-[600px] max-h-[440px] w-full h-auto px-4 pt-8"
        />
      )}
    </section>
  );
};

export default FeatureCard;