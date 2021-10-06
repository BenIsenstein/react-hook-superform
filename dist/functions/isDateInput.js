const dateInputNames = ['date', 'start', 'end', 'nextRecurringDate', 'dateCompleted', 'dateSignedUp'];

const isDateInput = name => dateInputNames.includes(name);

export { isDateInput };