import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="mt-24 mx-auto max-w-lg">
        <Image
          src="/copyben.JPG"
          alt="CopyBen"
          width={500}
          height={300}
          className="mt-8 mx-auto"
        />
        <h1 className="text-4xl font-bold text-center">Copy Copy That</h1>
        <p className="mt-8 text-lg">
          Teaching can be a very daunting task. Sometimes it might not even be worth the time and effort. From planning interactive and catered lessons to the interpersonal demands, it&apos;s a lot. <br />
          So for those who aren&apos;t seasoned educators but still have passions to share, this is where we come in. All you have to do is condense everything you see fit into a series of 10 PDF lessons. Each of these will be educational and empowering.<br />
          Consider the possibilities. Whether you&apos;re a chef, coder, or  yoga instructor, there&apos;s an audience waiting to learn what you have to teach.<br />
          With us, you can effortlessly monetize your expertise without the extra headaches.<br />
          No overhead costs. No long process. No BS!<br />
          Set your price and let your lessons flow to your students. Each course is drip-fed at the perfect pace to optimize learning and retention.<br />
        </p>
      </div>
    </main>
  );
}









