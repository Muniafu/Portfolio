import "../styles/style.css";

const Home = () => {

    return (
        <section id="home" className="hero d-flex align-items-center justify-content-center">
            <div className="text-center">
                <h1> Welcome to My Portfolio</h1>
                <p>Full Stack Developer | React | Node.js</p>
                <a href="projects" className="btn btn-primary">See My Work</a>
            </div>
        </section>
    );
};

export default Home;