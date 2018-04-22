import React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from '../components/layout/Footer';
import { footerNavigation } from '../config/layout';

storiesOf('Footer', module).addWithJSX('basic', () => (
    <Footer links={footerNavigation} />
));
