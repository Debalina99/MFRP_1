function findMaxId(employeesList) {
    const idsList = employeesList.map(emp => emp.id);
    console.log("ids list ",  idsList);
    return Math.max(...idsList);
}

module.exports = findMaxId;