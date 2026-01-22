import { MailTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import HeadingFont from './Texts/HeadingFont';
import { fontsm, pylg } from '../utils/constant';
const { Search } = Input;
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reveal from './Animation/Reveal';

const KeepInTouch = () => {
    return (
        <div className='bg-cover bg-no-repeat bg-center' style={{
            backgroundImage: 'url(/images/keep_in_touch_bg.svg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className={`flex flex-col gap-3 justify-center items-center w-[90%] sm:max-w-[1200px] mx-auto ${pylg}`}>
                <Reveal>
                    <HeadingFont text={'Lets Keep In Touch!'} className={'border-b border-black font-bold'} />
                </Reveal>
                <Reveal>
                    <p className={`font-semibold ${fontsm} text-center`}>
                        Subscribe To Our Weekly Newsletter And Receive Exclusive Offers On Products You Love!
                    </p>
                </Reveal>


                <div className='w-full'>

                    <Reveal width='w-full'>

                        <Search
                            placeholder="Enter Email ID"
                            allowClear
                            enterButton="Subscribe"
                            size="large"
                            prefix={<MailTwoTone style={{ fontSize: '26px' }} />}
                            onSearch={(email) => {
                                if (email) {
                                    // Redirect to mailto link with pre-filled content
                                    window.location.href = `mailto:garryappdroid@gmail.com?subject=Subscription Request&body=I would like to subscribe to your email. My email is: ${email}`;
                                } else {
                                    // alert("");
                                    toast.error("Please enter a valid email address!", {
                                        position: "top-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "colored",
                                        transition: Slide,
                                    });
                                    form.resetFields();
                                }
                            }}
                        />
                    </Reveal>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Slide}
            />
        </div>
    );
};

export default KeepInTouch;
