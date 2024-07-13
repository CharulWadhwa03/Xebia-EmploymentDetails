import React, { useState } from 'react';
import './EmploymentDetails.css';
import FetchEmployment from './fetchEmployment';

const EmploymentDetails = () => {
  const [activeTab, setActiveTab] = useState('');
  const [fullTimeData, setFullTimeData] = useState({
    selectedIndustry: '',
    companyName: '',
    selectedIncomeRange: ''
  });
  const [partTimeData, setPartTimeData] = useState({
    selectedIndustry: '',
    companyName: '',
    selectedIncomeRange: ''
  });
  const [selfEmployedData, setSelfEmployedData] = useState({
    selectedIndustry: '',
    selectedIncomeRange: ''
  });
  const [retiredData, setRetiredData] = useState({
    selectedIndustry: '',
    yearsRetired: ''
  });
  const [studentData, setStudentData] = useState({
    selectedIndustry: '',
    institutionName: ''
  });
  const [unemployedData, setUnemployedData] = useState({
    selectedIndustry: '',
    monthsUnemployed: ''
  });

  const tabs = [
    'Full-time employed',
    'Part-time employed',
    'Self-employed',
    'Retired',
    'Student',
    'Not in employment'
  ];

  const openTab = (tabName) => setActiveTab(tabName);

  const handleIndustrySelect = (dataSetter, industry) => {
    dataSetter((prevData) => ({
      ...prevData,
      selectedIndustry: industry
    }));
  };

  const handleCompanyNameChange = (dataSetter, event) => {
    dataSetter((prevData) => ({
      ...prevData,
      companyName: event.target.value
    }));
  };

  const handleIncomeRangeSelect = (dataSetter, range) => {
    dataSetter((prevData) => ({
      ...prevData,
      selectedIncomeRange: range
    }));
  };

  const handleYearsRetiredChange = (event) => {
    setRetiredData((prevData) => ({
      ...prevData,
      yearsRetired: event.target.value
    }));
  };

  const handleInstitutionNameChange = (event) => {
    setStudentData((prevData) => ({
      ...prevData,
      institutionName: event.target.value
    }));
  };

  const handleMonthsUnemployedChange = (event) => {
    setUnemployedData((prevData) => ({
      ...prevData,
      monthsUnemployed: event.target.value
    }));
  };

  return (
    <div className="container">
      <div className="title-line">
        <h3 className="number">07</h3>
        <h3 className="details">Employment Details</h3>
      </div>
      <hr />
      <h3>What's your employment status?</h3>
      <p>We ask this in order to improve security on your account.</p>
      <div className="tab">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tablinks ${activeTab === tab ? 'active' : ''}`}
            onClick={() => openTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Full-time employed tab */}
      <div className={`tabcontent ${activeTab === 'Full-time employed' ? 'active' : ''}`}>
        <h3>What industry do you work in?</h3>
        <p>Please select the closest option to your industry.</p>
        <div className="dropdown">
          <button className={`dropbtn ${fullTimeData.selectedIndustry ? 'selected-option' : ''}`} onClick={() => handleIndustrySelect(setFullTimeData, '')}>
            {fullTimeData.selectedIndustry || 'Select your industry'}
            <span className="arrow">&#9662;</span>
          </button>
          <div className="dropdown-content">
            <button onClick={() => handleIndustrySelect(setFullTimeData, 'Agriculture')}>Agriculture</button>
            <button onClick={() => handleIndustrySelect(setFullTimeData, 'Manufacturing')}>Manufacturing</button>
            {/* Add more industry options as needed */}
          </div>
        </div>
        <h3>What's name of your company?</h3>
        <input
          className='dropbtn'
          type="text"
          placeholder="Enter your company name"
          value={fullTimeData.companyName}
          onChange={(e) => handleCompanyNameChange(setFullTimeData, e)}
        />
        <h3>What's your annual income?</h3>
        <p>This includes your salary, benefits, investments, or other income you may receive.</p>
        <div className="annual-income-options">
          <button
            className={`tablinks ${fullTimeData.selectedIncomeRange === '£0-£24,999' ? 'active' : ''}`}
            onClick={() => handleIncomeRangeSelect(setFullTimeData, '£0-£24,999')}
          >
            £0-£24,999
          </button>
          <button
            className={`tablinks ${fullTimeData.selectedIncomeRange === '£25,000-£49,999' ? 'active' : ''}`}
            onClick={() => handleIncomeRangeSelect(setFullTimeData, '£25,000-£49,999')}
          >
            £25,000-£49,999
          </button>
          <button
            className={`tablinks ${fullTimeData.selectedIncomeRange === '£50,000-£99,999' ? 'active' : ''}`}
            onClick={() => handleIncomeRangeSelect(setFullTimeData, '£50,000-£99,999')}
          >
            £50,000-£99,999
          </button>
          <button
            className={`tablinks ${fullTimeData.selectedIncomeRange === '£100,000-£149,999' ? 'active' : ''}`}
            onClick={() => handleIncomeRangeSelect(setFullTimeData, '£100,000-£149,999')}
          >
            £100,000-£149,999
          </button>
          <button
            className={`tablinks ${fullTimeData.selectedIncomeRange === '£150,000+' ? 'active' : ''}`}
            onClick={() => handleIncomeRangeSelect(setFullTimeData, '£150,000+')}
          >
            £150,000+
          </button>
        </div>
      </div>

      {/* Part-time employed tab */}
      <div className={`tabcontent ${activeTab === 'Part-time employed' ? 'active' : ''}`}>
        <h3>What industry do you work in?</h3>
        <p>Please select the closest option to your industry.</p>
        <div className="dropdown">
          <button className={`dropbtn ${partTimeData.selectedIndustry ? 'selected-option' : ''}`} onClick={() => handleIndustrySelect(setPartTimeData, '')}>
            {partTimeData.selectedIndustry || 'Select your industry'}
            <span className="arrow">&#9662;</span>
          </button>
          <div className="dropdown-content">
            <button onClick={() => handleIndustrySelect(setPartTimeData, 'Agriculture')}>Agriculture</button>
            <button onClick={() => handleIndustrySelect(setPartTimeData, 'Manufacturing')}>Manufacturing</button>
            {/* Add more industry options as needed */}
          </div>
        </div>
        <h3>What's name of your company?</h3>
        <input
          className='dropbtn'
          type="text"
          placeholder="Enter your company name"
          value={partTimeData.companyName}
          onChange={(e) => handleCompanyNameChange(setPartTimeData, e)}
        />
        <h3>What's your annual income?</h3>
        <p>This includes your salary, benefits, investments, or other income you may receive.</p>
        <div className="annual-income-options">
          <button
            className={`tablinks ${partTimeData.selectedIncomeRange === '£0-£24,999' ? 'active' : ''}`}
            onClick={() => handleIncomeRangeSelect(setPartTimeData, '£0-£24,999')}
          >
            £0-£24,999
          </button>
          <button
            className={`tablinks ${partTimeData.selectedIncomeRange === '£25,000-£49,999' ? 'active' : ''}`}
            onClick={() => handleIncomeRangeSelect(setPartTimeData, '£25,000-£49,999')}
          >
            £25,000-£49,999
          </button>
          <button
            className={`tablinks ${partTimeData.selectedIncomeRange === '£50,000-£99,999' ? 'active' : ''}`}
            onClick={() => handleIncomeRangeSelect(setPartTimeData, '£50,000-£99,999')}
          >
            £50,000-£99,999
          </button>
          <button
            className={`tablinks ${partTimeData.selectedIncomeRange === '£100,000-£149,999' ? 'active' : ''}`}
            onClick={() => handleIncomeRangeSelect(setPartTimeData, '£100,000-£149,999')}
          >
            £100,000-£149,999
          </button>
          <button
            className={`tablinks ${partTimeData.selectedIncomeRange === '£150,000+' ? 'active' : ''}`}
            onClick={() => handleIncomeRangeSelect(setPartTimeData, '£150,000+')}
          >
            £150,000+
          </button>
        </div>
      </div>

      {/* Self-employed tab */}
      <div className={`tabcontent ${activeTab === 'Self-employed' ? 'active' : ''}`}>
        <h3>What industry do you work in?</h3>
        <p>Please select the closest option to your industry.</p>
        <div className="dropdown">
          <button className={`dropbtn ${selfEmployedData.selectedIndustry ? 'selected-option' : ''}`} onClick={() => handleIndustrySelect(setSelfEmployedData, '')}>
            {selfEmployedData.selectedIndustry || 'Select your industry'}
            <span className="arrow">&#9662;</span>
          </button>
          <div className="dropdown-content">
            <button onClick={() => handleIndustrySelect(setSelfEmployedData, 'Agriculture')}>Agriculture</button>
            <button onClick={() => handleIndustrySelect(setSelfEmployedData, 'Manufacturing')}>Manufacturing</button>
            {/* Add more industry options as needed */}
          </div>
        </div>
        <h3>What's your annual income?</h3>
        <p>This includes your salary, benefits, investments, or other income you may receive.</p>
        <div className="annual-income-options">
          <button
            className={`tablinks ${selfEmployedData.selectedIncomeRange === '£0-£24,999' ? 'active' : ''}`}
            onClick={() => handleIncomeRangeSelect(setSelfEmployedData, '£0-£24,999')}
          >
            £0-£24,999
          </button>
          <button
            className={`tablinks ${selfEmployedData.selectedIncomeRange === '£25,000-£49,999' ? 'active' : ''}`}
            onClick={() => handleIncomeRangeSelect(setSelfEmployedData, '£25,000-£49,999')}
          >
            £25,000-£49,999
          </button>
          <button
            className={`tablinks ${selfEmployedData.selectedIncomeRange === '£50,000-£99,999' ? 'active' : ''}`}
            onClick={() => handleIncomeRangeSelect(setSelfEmployedData, '£50,000-£99,999')}
          >
            £50,000-£99,999
          </button>
          <button
            className={`tablinks ${selfEmployedData.selectedIncomeRange === '£100,000-£149,999' ? 'active' : ''}`}
            onClick={() => handleIncomeRangeSelect(setSelfEmployedData, '£100,000-£149,999')}
          >
            £100,000-£149,999
          </button>
          <button
            className={`tablinks ${selfEmployedData.selectedIncomeRange === '£150,000+' ? 'active' : ''}`}
            onClick={() => handleIncomeRangeSelect(setSelfEmployedData, '£150,000+')}
          >
            £150,000+
          </button>
        </div>
      </div>

      {/* Retired tab */}
      <div className={`tabcontent ${activeTab === 'Retired' ? 'active' : ''}`}>
        <h3>What was your last occupation?</h3>
        <p>Please select the closest option to your last occupation.</p>
        <div className="dropdown">
          <button className={`dropbtn ${retiredData.selectedIndustry ? 'selected-option' : ''}`} onClick={() => handleIndustrySelect(setRetiredData, '')}>
            {retiredData.selectedIndustry || 'Select your last occupation'}
            <span className="arrow">&#9662;</span>
          </button>
          <div className="dropdown-content">
            <button onClick={() => handleIndustrySelect(setRetiredData, 'Manager')}>Manager</button>
            <button onClick={() => handleIndustrySelect(setRetiredData, 'Salesperson')}>Salesperson</button>
            {/* Add more occupation options as needed */}
          </div>
        </div>
        <h3>How long have you been retired?</h3>
        <input
          className='dropbtn'
          type="number"
          placeholder="Enter number of years retired"
          value={retiredData.yearsRetired}
          onChange={handleYearsRetiredChange}
        />
      </div>

      {/* Student tab */}
      <div className={`tabcontent ${activeTab === 'Student' ? 'active' : ''}`}>
        <h3>What's your field of study?</h3>
        <p>Please select the closest option to your field of study.</p>
        <div className="dropdown">
          <button className={`dropbtn ${studentData.selectedIndustry ? 'selected-option' : ''}`} onClick={() => handleIndustrySelect(setStudentData, '')}>
            {studentData.selectedIndustry || 'Select your field of study'}
            <span className="arrow">&#9662;</span>
          </button>
          <div className="dropdown-content">
            <button onClick={() => handleIndustrySelect(setStudentData, 'Computer Science')}>Computer Science</button>
            <button onClick={() => handleIndustrySelect(setStudentData, 'Business Administration')}>Business Administration</button>
            {/* Add more field of study options as needed */}
          </div>
        </div>
        <h3>Name of your institution?</h3>
        <input
          className='dropbtn'
          type="text"
          placeholder="Enter your institution name"
          value={studentData.institutionName}
          onChange={handleInstitutionNameChange}
        />
      </div>

      {/* Not in employment tab */}
      <div className={`tabcontent ${activeTab === 'Not in employment' ? 'active' : ''}`}>
        <h3>What was your last occupation?</h3>
        <p>Please select the closest option to your last occupation.</p>
        <div className="dropdown">
          <button className={`dropbtn ${unemployedData.selectedIndustry ? 'selected-option' : ''}`} onClick={() => handleIndustrySelect(setUnemployedData, '')}>
            {unemployedData.selectedIndustry || 'Select your last occupation'}
            <span className="arrow">&#9662;</span>
          </button>
          <div className="dropdown-content">
            <button onClick={() => handleIndustrySelect(setUnemployedData, 'Manager')}>Manager</button>
            <button onClick={() => handleIndustrySelect(setUnemployedData, 'Salesperson')}>Salesperson</button>
            {/* Add more occupation options as needed */}
          </div>
        </div>
        <h3>How long have you been unemployed?</h3>
        <input
          className='dropbtn'
          type="text"
          placeholder="Enter number of months unemployed"
          value={unemployedData.monthsUnemployed}
          onChange={handleMonthsUnemployedChange}
        />
      </div>

      {/* Button container */}
      <div className="button-container">
        <FetchEmployment />
      </div>
    </div>
  );
};

export default EmploymentDetails;
