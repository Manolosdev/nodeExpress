//Exportação organizada de métodos
module.exports = {
    createUserController: require("./create_user"),
    getUserController: require("./get_user"),
    getAllUserController: require("./get_all_user"),
    setUpdateUserController: require("./update_user"),
    setRemoveUserController: require("./remove_user")
};