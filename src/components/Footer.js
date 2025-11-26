import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h3>Contact</h3>
          <p>bellappalam@gmail.com</p>
          <p>+91 9840956836 / +91 9940285665</p>
        </div>
        <div className={styles.logoContainer}>
          
            <div className={styles.logo}>
              <img
                src="/path-to-bell-logo.png"
                // alt="Bell Logo"
                // className={styles.bellLogo}
              />
              {/* <div className={styles.brandText}>
                <p className={styles.pms}>PMS BRAND</p>
                <p className={styles.bell}>BELL</p>
                <p className={styles.appalam}>APPALAM</p>
              </div> */}
            
          </div>
        </div>
        <div className={styles.location}>
          <h3>Location</h3>
          <p>New #3, Hawker Jasan Street</p>
          <p>Sevenwells, Chennai – 600001</p>
          <p>Tamil Nadu, India</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© Copyright 2024. Aditama Studio. All rights reserved.</p>
        <a href="#" className={styles.terms}>Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
