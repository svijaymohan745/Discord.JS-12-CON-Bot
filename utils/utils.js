function find_level_from_xp(total_xp){
    current_level = 1
    for (xp_cap=0; xp_cap <= total_xp; xp_cap=xp_cap+current_level*40, current_level++);
    return {level: current_level-1, xp_cap: xp_cap-((current_level - 1)*40)}
}

module.exports = {find_level_from_xp};