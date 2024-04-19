import { useEffect, useState } from 'react';
import './DataSet.css';
import data from './wineDataSet.json';
import FlavanoidsTable from './FlavanoidsTable';
import GammaTable from './GammaTable';

const DataSet = () => {
    const [analyticsAlcholicClassOneData, setAnalyticsAlcholicClassOneData] = useState([]);
    const [analyticsAlcholicClassTwoData, setAnalyticsAlcholicClassTwoData] = useState([]);
    const [analyticsAlcholicClassThreeData, setAnalyticsAlcholicClassThreeData] = useState([]);


    const [analyticsGammaClassOneData, setAnalyticsGammaClassOneData] = useState([]);
    const [analyticsGammaClassTwoData, setAnalyticsGammaClassTwoData] = useState([]);
    const [analyticsGammaClassThreeData, setAnalyticsGammaClassThreeData] = useState([]);

  
    useEffect(() => {
        if (data.length > 0) {
            let classOneData = data.filter((item) => item.Alcohol === 1);
            setAnalyticsAlcholicClassOneData(classOneData);
            let classTwoData = data.filter((item) => item.Alcohol === 2);
            setAnalyticsAlcholicClassTwoData(classTwoData);
            let classThreeData = data.filter((item) => item.Alcohol === 3);
            setAnalyticsAlcholicClassThreeData(classThreeData);
            let classOneGamaData = data.filter((item) => item.Alcohol === 1);
            if (classOneGamaData?.length > 0) {
                classOneGamaData.forEach(((item, index) => {

                    if (item.Ash && item.Hue && item.Magnesium) {
                        let Gamma = ((Number(item.Ash) * Number(item.Hue)) / Number(item.Magnesium));

                        classOneGamaData[index]['Gamma'] = parseFloat(Gamma.toFixed(3))
                    }
                }))
                setAnalyticsGammaClassOneData(classOneGamaData);
            }
            let classGammaTwoData = data.filter((item) => item.Alcohol === 2);
            if (classGammaTwoData?.length > 0) {
                classGammaTwoData.forEach(((item, index) => {
                    if (item.Ash && item.Hue && item.Magnesium) {
                        let Gamma = ((Number(item.Ash) * Number(item.Hue)) / Number(item.Magnesium));
                        classGammaTwoData[index]['Gamma'] = parseFloat(Gamma.toFixed(3))
                    }
                }))
                setAnalyticsGammaClassTwoData(classGammaTwoData);
            }
            let classGammaThreeData = data.filter((item) => item.Alcohol === 3);
            if (classGammaThreeData?.length > 0) {
                classGammaThreeData.forEach(((item, index) => {

                    if (item.Ash && item.Hue && item.Magnesium) {
                        let Gamma = ((Number(item.Ash) * Number(item.Hue)) / Number(item.Magnesium));
                        classGammaThreeData[index]['Gamma'] = parseFloat(Gamma.toFixed(3))
                    }
                }))
                setAnalyticsGammaClassThreeData(classGammaThreeData);
            }
        }

    }, []);



    return (
        <div>
            <div>   <FlavanoidsTable
                analyticsAlcholicClassOneData={analyticsAlcholicClassOneData}
                analyticsAlcholicClassTwoData={analyticsAlcholicClassTwoData}
                analyticsAlcholicClassThreeData={analyticsAlcholicClassThreeData}
            />
            </div>
            <div>
                <GammaTable
                    analyticsGammaClassOneData={analyticsGammaClassOneData}
                    analyticsGammaClassTwoData={analyticsGammaClassTwoData}
                    analyticsGammaClassThreeData={analyticsGammaClassThreeData}
                />
            </div>




        </div>
    )

}

export default DataSet;