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
            owned_vehicles.plate AS vehicle_plate,
            owned_vehicles.vehicle AS vehicle_specs, 
            owned_vehicles.model AS vehicle_model,
            owned_vehicles.job AS vehicle_job,
            owned_vehicles.slika AS vehicle_img
        FROM 
            users
        LEFT OUTER JOIN 
            owned_vehicles 
        ON
            owned_vehicles.owner = users.identifier
        WHERE 
            users.identifier = ?   
    `
}