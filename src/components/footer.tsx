import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="border-top pt-4 mt-5 text-center d-flex flex-column align-items-center gap-3">
            <div className="d-flex justify-content-center gap-3">
                {['f', 't', 'in', 'yt'].map((social, i) => (
                    <a
                        href={`#${social}`}
                        key={i}
                        className="d-flex align-items-center justify-content-center border border-dark rounded-circle  text-xs hover: text-decoration-none"
                        style={{ width: '32px', height: '32px' }}
                    >
                        {social === 'f' && <FaFacebook />}
                        {social === 't' && <FaTwitter />}
                        {social === 'in' && <FaLinkedin />}
                        {social === 'yt' && <FaYoutube />}
                    </a>
                ))}
            </div>
            <div className="text-xs font-mono ">mishalrm@gmail.com</div>
            <div className="" style={{ fontSize: '10px' }}>
                Copyright © 2026 Timesworld. All rights reserved for the machine test.
            </div>
        </footer>

    )
}