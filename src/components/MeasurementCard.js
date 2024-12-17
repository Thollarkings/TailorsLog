import React, { useState } from 'react';
import './MeasurementCard.css';

const MeasurementCard = ({ measurement, index, onDelete, setEditingIndex }) => {
    const [detailsVisible, setDetailsVisible] = useState(false);

    return (
        <div className='measurement-card'>
            <h3>Client: {measurement.name}</h3>
            <p>Phone: {measurement.phone}</p>
            <p>Recorded: {measurement.timestamp}</p>

            <button onClick={() => setDetailsVisible(prev => !prev)}>
                {detailsVisible ? 'Hide Measurement Details' : 'Show Measurement Details'}
            </button>

            {detailsVisible && (
                <div>
                    <h4>Measurement Details</h4>
                    <p>Head: {measurement.head}</p>
                    <p>Shoulder to Shoulder: {measurement.shoulderToShoulder}</p>
                    <p>Neck: {measurement.neck}</p>
                    <p>Chest: {measurement.chest}</p>
                    <p>Waist: {measurement.waist}</p>
                    <p>Shoulder to Nipple: {measurement.shoulderToNipple}</p>
                    <p>Shoulder to Underbust: {measurement.shoulderToUnderbust}</p>
                    <p>Shoulder to Waist: {measurement.shoulderToWaist}</p>
                    <p>Nipple to Nipple: {measurement.nippleToNipple}</p>
                    <p>Sleeve Length: {measurement.sleeveLength}</p>
                    <p>Round Sleeve: {measurement.roundSleeve}</p>
                    <p>Hip: {measurement.hip}</p>
                    <p>Half Length: {measurement.halfLength}</p>
                    <p>Top Length: {measurement.topLength}</p>
                    <p>Gown Length: {measurement.gownLength}</p>
                    <p>Trouser Waist: {measurement.trouserWaist}</p>
                    <p>Crotch: {measurement.crotch}</p>
                    <p>Trouser Length: {measurement.trouserLength}</p>
                    <p>Thigh: {measurement.thigh}</p>
                    <p>Waist to Knee: {measurement.waistToKnee}</p>
                    <p>Calf: {measurement.calf}</p>
                    <p>Ankle: {measurement.ankle}</p>
                    <p>Inside Leg Seam: {measurement.insideLegSeam}</p>
                </div>
                
            )}

            <div>
                <button onClick={() => setEditingIndex(index)}>Edit</button>
                <button onClick={() => onDelete(index)}>Delete</button>
            </div>
            
        </div>
        
        
    );
};

export default MeasurementCard;