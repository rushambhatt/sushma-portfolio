import PhotoCard from "../components/PhotoCard"

function Contact(){

    return (
        <div className="contact">
            <div className="contact-text">
                <h1 className="intro">
                    About Me: Sushma Bhatta
                </h1> 
    
                <h2 className="aboutMe">
                    Born and raised in Nepal, I moved to the Unied States in 2022 to pursue a new challenge -- a career in hairstyling.

                    I have always had a passion for hairstyling, and I am excited to share my skills and creativity with clients from all walks of life.
                    
                    I have a wide range of experience in different hair types and styles, and I am always eager to learn new techniques and trends.
                </h2>
    
                <h2 className="aboutMe">
                    I am committed to providing excellent customer service and creating a welcoming and comfortable environment for my clients.

                    I believe that hairstyling is not just about making people look good, but also about helping them feel confident and empowered.

                    During my free time, I enjoy spending time with my family, exploring new places, and trying out new recipes in the kitchen.
                </h2>
            </div>
            
            <div className="contact-photo">
                <PhotoCard className="contact-item" photo={{url: "/photos/photo5.jpeg", title: "This is me!"}}/>
            </div>
        </div>
    )
}

export default Contact