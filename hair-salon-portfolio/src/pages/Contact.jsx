import PhotoCard from "../components/PhotoCard";

function Contact() {
  const baseUrl = import.meta.env.BASE_URL;

  const mainPhoto = {
    url: `${baseUrl}photos/photo10.JPG`,
    title: "Sushma Bhatta",
  };

  return (
    <div className="contact">
      <section className="social-section">
        <h1 className="intro">Sushma Bhatta</h1>

        <p className="phone-number">
          <a href="tel:12149606240">(214) 960-6240</a>
        </p>

        <p className="social-subtitle">Hair Stylist & Beauty Portfolio</p>

        <div className="social-links">
          <a href="https://www.instagram.com/sushma.bhatta3" target="_blank" rel="noreferrer">
            Instagram
          </a>

          <a href="https://www.facebook.com/sushma.bhatta3" target="_blank" rel="noreferrer">
            Facebook
          </a>

          <a href="https://www.tiktok.com/@bhattasush" target="_blank" rel="noreferrer">
            TikTok
          </a>
        </div>

        <div className="main-contact-photo">
          <PhotoCard
            className="contact-item"
            photo={mainPhoto}
          />
        </div>
      </section>

      <section className="contact-text">
        <h2 className="about-heading">About Me</h2>

        <p className="aboutMe">
          Born and raised in Nepal, I moved to the United States in 2022 to
          pursue a new challenge — a career in hairstyling.
        </p>

        <p className="aboutMe">
          I have always had a passion for hairstyling, and I am excited to share
          my skills and creativity with clients from all walks of life.
        </p>

        <p className="aboutMe">
          I am committed to providing excellent customer service and creating a
          welcoming, comfortable environment for my clients.
        </p>
      </section>
    </div>
  );
}

export default Contact;