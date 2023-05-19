import React, { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../providers/AuthProvider';
import SingleKitCard from './SingleKitCard';

const ShopByCAtegory = () => {
    const { toyInfo } = useContext(AuthContext);
    const scienceKits = toyInfo.filter(singleKit => singleKit.category === "Science Kits");
    console.log(scienceKits);
    const learningKits = toyInfo.filter(singleKit => singleKit.category === "Learning Kits");
    console.log(learningKits);
    const engineeringKits = toyInfo.filter(singleKit => singleKit.category === "Engineering Kits");
    console.log(engineeringKits);
    return (
        <div className='mt-20'>
            <Tabs className='mx-10 border-fuchsia-100'>
                <div className='border-0 bg-slate-800 rounded-lg mb-5'>
                    <TabList className='flex flex-row justify-around text-white text-xl py-3'>
                        <Tab>Science Kits</Tab>
                        <Tab>Learning Kits</Tab>
                        <Tab>Engineering Kits</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    {/* Science kits will be shown here */}
                    {
                        scienceKits.map(singleKit => <SingleKitCard singleKit={singleKit}></SingleKitCard>)
                    }
                </TabPanel>

                <TabPanel>
                    {/* Learning kits will be shown here */}
                    {
                        learningKits.map(singleKit => <SingleKitCard singleKit={singleKit}></SingleKitCard>)
                    }
                </TabPanel>

                <TabPanel>
                    {/* Engineering kits will be shown here */}
                    {
                        engineeringKits.map(singleKit => <SingleKitCard singleKit={singleKit}></SingleKitCard>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCAtegory;