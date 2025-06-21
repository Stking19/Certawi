import Image from 'next/image'
import Styles from './testimonial.module.scss'
import person_1 from '/public/IMG/person-1.png'
import person_2 from '/public/IMG/person-2.png'
import person_3 from '/public/IMG/person-3.png'

export default function Testimonials () {
    return (
        <>
          <p className={`${Styles.sora} ${Styles.testimonialHeader}`}>Testimonials</p>
          <p className={Styles.testimonialCaption}>What our users have to say about us</p>
          <div className={`${Styles.flex} ${Styles.testimonials} ${Styles.center} ${Styles.justifyBetween} ${Styles.gap} ${Styles.testimonialBottom}`}>
            <div className={`${Styles.testimonialContainer} ${Styles.textLeft} ${Styles.sora} ${Styles.test}`}>
              <div className={`${Styles.flex} ${Styles.itemsCenter}`} style={{width: '343px'}}>
                <Image src={person_1} alt="user" />
                <div style={{paddingLeft: '20px'}}>
                    <p style={{fontWeight: '600'}}>Lindsay Favazza</p>
                    <p>United States</p>
                </div>
              </div>
              <p style={{paddingTop: "25px"}}>
                  “This is my first time utilizing Certawi.
                  It is simply brilliant. In a matter of seconds, a full certificate is generated”
              </p>
            </div>


            <div className={`${Styles.testimonialContainer} ${Styles.textLeft} ${Styles.sora} ${Styles.test}`}>
              <div className={`${Styles.flex} ${Styles.itemsCenter}`} style={{width: '343px'}}>
                <Image src={person_2} alt="user" />
                <div style={{paddingLeft: '20px'}}>
                    <p style={{fontWeight: '600'}}>Valerie Tan</p>
                    <p>Singapore</p>
                </div>
              </div>
              <p style={{paddingTop: "25px"}}>
                “The certawi certificate generator is a fantastic tool that helps me create certificates 
                quickly and with plenty of inspiration. Definitely, I would advise.”
              </p>
            </div>

            <div className={`${Styles.testimonialContainer} ${Styles.textLeft} ${Styles.sora} ${Styles.test}`}>
              <div className={`${Styles.flex} ${Styles.itemsCenter}`} style={{width: '343px'}}>
                <Image src={person_3} alt="user" />
                <div style={{paddingLeft: '20px'}}>
                    <p style={{fontWeight: '600'}}>Lea Botha</p>
                    <p>South Africa</p>
                </div>
              </div>
              <p style={{paddingTop: "25px"}}>
                “Probably the best platform for anyone needing to generate bulk certificates. 
                Amazing! I love how easy it is to use! Recommended for EVERYONE!”
              </p>
            </div>
          </div>
        </>
    )
}