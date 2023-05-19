import AnimatedCard from "./AnimatedCard";

const OurBestTeachers = () => {
  const cardData = [
    {
      name: 'John Doe',
      image: 'https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2020/march/6-ways-to-improve-online-teaching.jpg',
      facebookId: 'johndoe',
      twitterId: 'johndoe',
      googleId: "",
      linkedinId: "johndoe",
    },
    {
      name: 'Zara Rahman',
      image: 'https://www.english.com/blog/wp-content/uploads/2020/04/Teaching-online-FAQs-1132x670.jpg',
      facebookId: 'janesmith',
      twitterId: 'janesmith',
      googleId: "",
      linkedinId: ""
    },
    {
      name: 'Alish Anam',
      image: 'https://assets.entrepreneur.com/content/3x2/2000/20200323171735-GettyImages-1066557788.jpeg',
      facebookId: 'janesmith',
      twitterId: 'janesmith',
      googleId: "",
      linkedinId: ""
    },
    {
      name: 'Jane Smith',
      image: 'https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2020/march/6-ways-to-improve-online-teaching.jpg',
      facebookId: 'janesmith',
      twitterId: 'janesmith',
      googleId: "",
      linkedinId: ""
    },
    {
      name: 'Jane Smith',
      image: 'https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2020/march/6-ways-to-improve-online-teaching.jpg',
      facebookId: 'janesmith',
      twitterId: 'janesmith',
      googleId: "",
      linkedinId: ""
    },
    {
      name: 'Jane Smith',
      image: 'https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2020/march/6-ways-to-improve-online-teaching.jpg',
      facebookId: 'janesmith',
      twitterId: 'janesmith',
      googleId: "",
      linkedinId: ""
    },
    {
      name: 'Jane Smith',
      image: 'https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2020/march/6-ways-to-improve-online-teaching.jpg',
      facebookId: 'janesmith',
      twitterId: 'janesmith',
      googleId: "",
      linkedinId: ""
    },
    {
      name: 'Jane Smith',
      image: 'https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2020/march/6-ways-to-improve-online-teaching.jpg',
      facebookId: 'janesmith',
      twitterId: 'janesmith',
      googleId: "",
      linkedinId: ""
    },

  ];

  return (
    <>
      <div className="p-4 mt-48">
        <div class="flex items-center justify-center h-full">
          <div class="h-16 w-2 bg-green-500 m-2"></div><h1 className="text-4xl font-bold mb-4 text-center"><span className="text-green-500">Our</span> Best Teachers</h1>
        </div>
        <p className="text-xl text-center">They are adept at fostering interactive and dynamic learning environments that inspire and empower students.</p>
      </div>
      <div className="flex justify-center items-center mt-16 mb-16">
        <div className="flex overflow-x-scroll">
          {cardData.map((card, index) => (
            <AnimatedCard
              key={index}
              name={card.name}
              image={card.image}
              facebookId={card.facebookId}
              twitterId={card.twitterId}
              googleId={card.googleId}
              linkedinId={card.linkedinId}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurBestTeachers;