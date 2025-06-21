import Styles from './bulkstep.module.scss'
import example from '/public/IMG/example.png'
import one from '/public/IMG/step-one.png'
import two from '/public/IMG/step-two.png'
import three from '/public/IMG/step-three.png'
import Image from 'next/image'

export default function BulkStep () {
    return (
        <div className={Styles.bulk}>
          <p className={`${Styles.heading} ${Styles.sora}`}>Create bulk Certificates in <span className={Styles.emphasized}>3 easy steps</span></p>
          <div className={`${Styles.flex} ${Styles.space} ${Styles.center} ${Styles.itemsCenter} ${Styles.wrap}`}>
            <Image src={example} alt={Styles.bulkExample} style={{cursor: 'pointer'}} className={Styles.example}/>
            <div className={`${Styles.textLeft} ${Styles.workSans}`}>
                <div className={Styles.process}>
                  <Image src={one} alt="one" />
                  <p className={Styles.steps}>Select certificate template</p>
                </div>
                <div className={Styles.process}>
                  <Image src={two} alt="two" />
                  <p className={Styles.steps}>Upload a CSV file</p>
                </div>
                <div className={Styles.process}>
                  <Image src={three} alt="three" />
                  <p className={Styles.steps}>Generate bulk certificates</p>
                </div>
            </div>
          </div>
          <button className={`${Styles.bulkButton} ${Styles.workSans}`}>Create Bulk Certificates</button>
        </div>
    )
}