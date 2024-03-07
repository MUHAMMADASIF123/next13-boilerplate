import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DateRangePicker } from '@mui/lab';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';





export default function CommonlyUsedComponents() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
<DatePicker />
    </LocalizationProvider>
  );
}
