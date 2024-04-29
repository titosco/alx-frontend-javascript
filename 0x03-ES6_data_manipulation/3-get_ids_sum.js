export default function getStudentIdsSum(student){
    return student.reduce((acc, c) => acc + c.id, 0);
}