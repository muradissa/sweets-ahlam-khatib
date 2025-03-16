import "./Footer.css"; // Import the CSS file
import NextGenMurad from '../assets/nextgenmurad.png'
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/nextgenmurad" // Replace with your actual Instagram URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={NextGenMurad} alt="NextGenMurad"  />
        </a>

        {/* Developer Credit with Link */}
        <p className="developer-text">
          Developed by{" "}
          <a
            href="https://www.instagram.com/nextgenmurad"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
          >
            NextGenMurad
          </a>
        </p>

        {/* Copyright */}
        <p className="copyright-text">
            NextGenMurad
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
