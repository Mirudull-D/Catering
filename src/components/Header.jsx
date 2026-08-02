import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">BluePlate Catering</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="#services" className={styles.navLink}>Services</Link>
        <Link href="#menu" className={styles.navLink}>Menu</Link>
        <Link href="#about" className={styles.navLink}>About Us</Link>
        <Link href="#contact" className={styles.navLink}>Contact</Link>
      </nav>
      <button className={styles.ctaButton}>Book Now</button>
    </header>
  );
}
