import PhotoCard from "../components/PhotoCard";

function Contact() {
  const baseUrl = import.meta.env.BASE_URL;

  const lifestylePhotos = [
    {
      url: `${baseUrl}photos/photo5.jpeg`,
      title: "This is me!",
    },
    {
      url: `${baseUrl}photos/photo1.jpg`,
      title: "Family and lifestyle",
    },
    {
      url: `${baseUrl}photos/photo2.jpg`,
      title: "Behind the scenes",
    },
    {
      url: `${baseUrl}photos/photo3.jpg`,
      title: "Personality",
    },
  ];

  return (
    <div className="contact">
      <div className="contact-text">
        <h1 className="intro">About Me: Sushma Bhatta</h1>

        <h2 className="aboutMe">
          Born and raised in Nepal, I moved to the United States in 2022 to
          pursue a new challenge — a career in hairstyling.
        </h2>

        <h2 className="aboutMe">
          I have always had a passion for hairstyling, and I am excited to share
          my skills and creativity with clients from all walks of life.
        </h2>

        <h2 className="aboutMe">
          I am committed to providing excellent customer service and creating a
          welcoming, comfortable environment for my clients.
        </h2>
      </div>

      <div className="contact-photo">
        {lifestylePhotos.map((photo, index) => (
          <PhotoCard
            key={index}
            className="contact-item"
            photo={photo}
          />
        ))}
      </div>
    </div>
  );
}

export default Contact;