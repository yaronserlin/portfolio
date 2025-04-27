import Section from '../components/Section';
import styles from '../styles/Home.module.css';
import profileImage from '../assets/images/Yaron-Serlin.png';

function Home() {
    return (
        <div>
            <Section title="About Me">
                <img src={profileImage} alt="Profile" className={styles.profile} />
                <div className={styles.aboutText}>
                    <p>
                        I'm a junior developer with a strong foundation in full-stack web development and software programming.
                        I'm about to complete my Bachelor's degree in Computer Science at the Open University of Israel.
                        I'm passionate about building efficient and user-friendly applications, both on the front-end and back-end.
                        As a motivated and fast learner, I'm excited to keep growing, take on new challenges, and contribute to meaningful projects with a professional and detail-driven approach.
                    </p>
                </div>
            </Section>
            <Section className={styles.aboutText} >
                <p><strong>Programming Languages:</strong> Java, JavaScript, C, C++, Python</p>
                <p><strong>Front-End:</strong> React</p>
                <p><strong>Back-End:</strong> Node.js, Express</p>
                <p><strong>Databases:</strong> Mongoose (MongoDB), SQLite3</p>
                <p><strong>Web Development:</strong> Full-stack (Front-End & Back-End)</p>

            </Section >

        </div >
    );
}

export default Home;
