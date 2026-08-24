import 'bootstrap-icons/font/bootstrap-icons.css';
function Contact() {
  return (
    <section id="contact">
      <div className="contact-box">
        <h2>
          Let's build something
          <br />
          worth shipping.
        </h2>
        <p>
          I'm currently open to new roles and select freelance projects. The fastest way to
          reach me is email.
        </p>
        <a className="btn-primary" href="mailto:daknguenyreath@gmail.com">
          daknguenyreath@gmail.com
        </a>
        <div className="social-row">

          <a href="https://github.com/dakreath"><i className = "bi bi-github socials"></i></a>
          <a href="https://linkedin.com/in/dak-reath-28a09938a" target="_blank" rel="noopener noreferrer"><i className = "bi bi-linkedin socials"></i></a>
          <a href="https://www.instagram.com/dak_rumjoo"><i className = "bi bi-instagram socials"></i></a>
        
        </div>
      </div>
    </section>
  )
}

export default Contact
