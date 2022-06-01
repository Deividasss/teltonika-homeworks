import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import "../footer/Footer.scss"

const Footer = () => {
    return (
        <>
            <footer class="appFooter">
                <div class="container p-4 pb-0">
                    <section class="mb-4">
                        <a class="btn btn-outline-light btn-floating m-1" href="#" role="button"
                        ><i><FaFacebookF /></i></a>
                        <a class="btn btn-outline-light btn-floating m-1" href="#" role="button"
                        ><i><FaTwitter /></i></a>
                        <a class="btn btn-outline-light btn-floating m-1" href="#" role="button"
                        ><i><FaGoogle /></i ></a>
                        <a class="btn btn-outline-light btn-floating m-1" href="#" role="button"
                        ><i><FaInstagram /></i></a>
                        <a class="btn btn-outline-light btn-floating m-1" href="#" role="button"
                        ><i><FaLinkedin /></i></a>
                        <a class="btn btn-outline-light btn-floating m-1" href="#" role="button"
                        ><i><FaGithub /></i></a>
                    </section>
                </div>
                <div class="text-center p-3">
                    © 2022 Copyright:
                    <a class="text-white" href="#"> Front-EndTask.com</a>
                </div>
            </footer>
        </>
    )
}

export default Footer