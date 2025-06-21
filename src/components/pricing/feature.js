import Styles from "@/styles/pricing.module.scss";
import Image from "next/image";
import Table from "react-bootstrap/Table";

function Feature () {
    return(
        <section className={Styles.feature}>
            <article>
                <h3>Feature Comparison</h3>
            </article>
            
            <article className={Styles.tableContainer}>
                <Table responsive="md">
                    <thead>
                        <tr>
                            <th>Overview</th>
                            <th>Basic</th>
                            <th>Standard</th>
                            <th>Premium</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Price (monthly billing)</td>
                            <td>$0/month</td>
                            <td>$23.99/month</td>
                            <td>$35.99/month</td>
                        </tr>
                        <tr>
                            <td>Price (annual billing)</td>
                            <td>$0/year</td>
                            <td>$239.99/year</td>
                            <td>$359.99/year</td>
                        </tr>
                        <tr>
                            <td>Monthly Active Users</td>
                            <td>12,784</td>
                            <td>5,941</td>
                            <td>2,891</td>
                        </tr>
                        <tr>
                            <td>Certificates per month</td>
                            <td>100</td>
                            <td>500</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr>
                            <td>Integrations</td>
                            <td>None</td>
                            <td>Basic</td>
                            <td>Advanced</td>
                        </tr>
                        <tr>
                            <td>Templates library</td>
                            <td>Generic</td>
                            <td>5</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>Collaborative tools</td>
                            <td><Image src="/IMG/cancel.svg" alt="cancel" width={20} height={20}/></td>
                            <td><Image src="/IMG/cancel.svg" alt="cancel" width={20} height={20}/></td>
                            <td><Image src="/IMG/good.svg" alt="good" width={20} height={20}/></td>
                        </tr>
                        <tr>
                            <td>Dashboard interface</td>
                            <td><Image src="/IMG/cancel.svg" alt="cancel" width={20} height={20}/></td>
                            <td><Image src="/IMG/good.svg" alt="good" width={20} height={20}/></td>
                            <td><Image src="/IMG/good.svg" alt="good"width={20} height={20} /></td>
                        </tr>
                        <tr>
                            <td>Customer support</td>
                            <td>Regular</td>
                            <td>Regular</td>
                            <td>Priority</td>
                        </tr>
                        <tr>
                            <td>Dedicated assistant</td>
                            <td><Image src="/IMG/cancel.svg" alt="cancel" width={20} height={20}/></td>
                            <td><Image src="/IMG/cancel.svg" alt="cancel" width={20} height={20}/></td>
                            <td><Image src="/IMG/good.svg" alt="good" width={20} height={20}/></td>
                        </tr>
                        <tr>
                            <td>Mail delivery</td>
                            <td><Image src="/IMG/cancel.svg" alt="cancel" width={20} height={20}/></td>
                            <td><Image src="/IMG/good.svg" alt="good" width={20} height={20}/></td>
                            <td><Image src="/IMG/good.svg" alt="good" width={20} height={20}/></td>
                        </tr>
                        <tr>
                            <td>Add-on professional services</td>
                            <td>-</td>
                            <td>-</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Certificate download formats</td>
                            <td>zip</td>
                            <td>zip, png</td>
                            <td>zip, png, pdf</td>
                        </tr>
                    </tbody>

                </Table>
            </article>

            <article className={Styles.featureEnd}>
                <h3>Trusted by 500+ high performing businesses and startups</h3>

                <div>
                    <Image src="/IMG/ebay.svg" alt="ebay" width={80} height={80}/>
                    <Image src="/IMG/cnn.svg" alt="cnn" width={80} height={80}/>
                    <Image src="/IMG/google.svg" alt="google" width={80} height={80}/>
                    <Image src="/IMG/cisco.svg" alt="cisco" width={80} height={80}/>
                    <Image src="/IMG/airbnb.svg" alt="airbnb" width={80} height={80}/>
                    <Image src="/IMG/uber.svg" alt="uber" width={80} height={80}/>
                </div>
            </article>

        </section>
    );

}

export default Feature;

