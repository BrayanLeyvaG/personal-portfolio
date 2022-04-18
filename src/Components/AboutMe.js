import React from 'react'

export const AboutMe = () => {
  return (
    <div className='about-me' id='about-me'>
        <p className='titles title-me'>About me</p>
        <div className='am-bg'>
            <div className='about-container'>
                <div className='me-1'>
                    <div className='am-img'></div>
                    <p>I am dedicated and creative, constantly looking to improve personally and professionally. I am motivated by constant learning, currently I like working with <span className='react'>React</span>.</p>
                </div>
                <div className='me-2'>
                    <div className='am-ed'>
                        <p className='am-e'>Education</p>
                        <div className='am-p'><p>2016 - 2020</p><p><i class="fas fa-graduation-cap"></i> Bachelor's Degree in Industrial Engineering at <a href='https://www.uanl.mx/'>UANL</a></p></div>
                        <div className='am-p'><p>2021 - (Currently)</p><p><i class="fas fa-laptop-code"></i> Full-Stack Developer student at <a href='https://www.academlo.com/'>Academlo</a></p></div>
                    </div>
                    <div className='am-ex'>
                        <p className='am-e'>Experience</p>
                        <div className='am-p'><p>2019</p><p><i class="fas fa-briefcase"></i> Scheduling Intern at <a href='https://www.haldex.com/'>Haldex</a></p></div>
                        <div className='am-p'><p>2020 - 2021</p><p><i class="fas fa-briefcase"></i> Quality Assurance Engineer at <a href='https://www.navistar.com/'>Navistar</a></p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
