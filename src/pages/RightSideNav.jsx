import { FaGoogle } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import qzone1 from '../assets/qZone1.png'
import qzone2 from '../assets/qZone2.png'
import qzone3 from '../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>

            <div>
                <h1 className="text-xl font-semibold">Log in with</h1>
                <button className="btn btn-outline mt-2">
                    <FaGoogle />
                    Log in with google
                </button>
                <button className="btn btn-outline mt-3">
                    <SiGithub />
                    Log in with github
                </button>

            </div>


            <div className="mt-8">
                <h1 className="text-xl font-semibold mb-3">Find us</h1>

                <div className="border px-8 py-4 w-48 rounded-2xl space-y-3">
                    <div className="flex gap-2 items-center p-2 border">
                        <p className="text-blue-700">
                            <ImFacebook2 />
                        </p>
                        <a href="">Facebook</a>
                    </div>
                    <div className="flex gap-2 items-center p-2 border">
                        <p>
                            <BsTwitterX />
                        </p>
                        <a href="">X</a>
                    </div>
                    <div className="flex gap-2 items-center p-2 border">
                        <p className="text-[#FE2A67]">
                            <FaInstagram />
                        </p>
                        <a href="">Instagram</a>
                    </div>
                </div>



                <div className="mt-8">
                    <h1 className="text-xl font-semibold">Q zone</h1>
                    <img src={qzone1} alt="" />
                    <img src={qzone2} alt="" />
                    <img src={qzone3} alt="" />

                </div>

            </div>
        </div>
    );
};

export default RightSideNav;