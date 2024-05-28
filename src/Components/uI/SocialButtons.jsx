import google from '../../assets/Social_img/Group 571.png';
import github from '../../assets/Social_img/download.png'


// eslint-disable-next-line react/prop-types
export default function SocialButtons({ text, icon, handler }) {



  return (
    <button onClick={handler} className="btn btn-outline flex justify-center">
      <div className='w-1/5 h-4/5'>
        <img className='w-4/5 h-full' src={icon === 'google' ? google : github} alt="google" />
      </div>
      <p>{text}</p></button>
  )
}
