import React from 'react'
import styles from '../../style';
import discount from '../../assets/images/Discount.svg';
import homepage from '../../assets/images/homepage.png';
const Highlight = () => {
  return(
  <section id = "home" className = {` container flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`}>
    <div className={` flex-1 ${styles.flexStart} flex-col xl:px:0 sm: px:16px px:4`}>
      <div className = {`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 `}>
        {/* <img src={discount} alt = "discount" className= "w-[32px] h-[32px]"/> */}
        {/* <p className={`${styles.paragraph} ml-2`}>
        <span className='text-white'>20%</
        span> Discount for{" "}
        <span className='text-white'>1 Month</
        span> Account */}
      
        {/* </p> */}
      </div>

    <div className={`py-[6] text-left flex flex-row justify-end w-full items-center`}>
      <h1 className = {`flex-1 font-poppins font-bold text-[70px] text-white ss:text-[72px] ss:leadimg-[100px] leading-[75px]` }>The Only <br className="sm:block hidden"/>{" "}
      <span className='text-gradient'>Central Repo <br className='sm:block hidden'/>{"  "}</
      span> {" "}
      
      </h1>
      
      </div>
       <h1 className = {`font-poppins text-left font-bold ss:text-[72px] text-[70px] text-white ss:leading-[100px] leading-[75px] w-full`}>
          you need
       </h1>
       <p className={`font-poppins text-left ${styles.paragraph} max-w-[470px] mt-5`}>
       Just answer a few questions to know the right job and career path, in your your skills and interests. We provide you with great resources too.
       </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md: my-0 ,my-10 relative`}>
      <img src= {homepage} alt="homepage" className = "w-[100%] h-[100%] relative z-[5]"/>
      <div className = "absolute w-%[40%] z-[0] h-[35%] top-0 pink__gradient"/>
      <div className = "absolute w-%[80%] z-[1] h-[80%] rounded-full op-0 white__gradient"/>
      <div className = "absolute w-%[50%] z-[0] h-[50%] roght-20 blue__gradient"/>

    </div>
    
  
  </section>

)
};

export default Highlight;