import React from 'react';
import PropTypes from 'prop-types';

import '../style.scss';
import './style.scss';

import CardLogos from '../CardLogos';
import CardDetails from '../CardDetails';
import AccountName from '../AccountName';
import AccountSummary from '../AccountSummary';

import MultiModuleButtons from 'components/UI/Buttons/MultiModuleButtons';
import SingleMultiButton from 'components/UI/Buttons/SingleMultiButton';

const CardInfobox = ({
   number,
   expiresMonth,
   expiresYear,
   balance,
   income7Days,
   expenses7Days,
   currentUrl
}) => {
   return (
      <section className="infobox card-infobox module">
         <header>
            <CardLogos type="visa" />
            <CardDetails number={number} expiresMonth={expiresMonth} expiresYear={expiresYear} />
         </header>

         <AccountName />
         <AccountSummary
            balance={balance}
            income7Days={income7Days}
            expenses7Days={expenses7Days}
         />

         <MultiModuleButtons>
            <SingleMultiButton text="Change PIN" href={`${currentUrl}/change-pin`} />
            <SingleMultiButton text="Change limits" href={`${currentUrl}/change-limits`} />
         </MultiModuleButtons>
      </section>
   );
};

CardInfobox.propTypes = {
   number: PropTypes.number,
   expiresMonth: PropTypes.number,
   expiresYear: PropTypes.number,
   balance: PropTypes.number,
   income7Days: PropTypes.number,
   expenses7Days: PropTypes.number,
   currentUrl: PropTypes.string
};

export default CardInfobox;
