export default {
    findById: `
        SELECT 
            users.firstname AS user_firstname,
            users.lastname AS user_lastname,
            users.sex AS user_sex,
            users.accounts AS user_accounts,
            users.inventory AS user_inventory,
            users.health AS user_health,
            users.pancir AS user_pancir,
            users.group AS user_group,
            users.vreme AS user_totalTime,
            owned_vehicles.ime AS vehicle_name,
            owned_vehicles.plate AS vehicle_plate,
            owned_vehicles.health AS vehicle_health,
            owned_vehicles.slika AS vehicle_img,
            jobs.label AS job_name,
            job_grades.label AS job_position
        FROM 
            users
        LEFT OUTER JOIN 
            owned_vehicles 
        ON
            owned_vehicles.owner = users.identifier
        LEFT JOIN 
            jobs
        ON
            jobs.name = users.job
        LEFT JOIN 
            job_grades
        ON 
            job_grades.job_name = users.job AND job_grades.grade = users.job_grade
        WHERE 
            users.identifier = ?;
    `
}