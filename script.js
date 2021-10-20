'USE STRICT'

const generate = document.getElementById('generate');
const finalQuery = document.getElementById('finalQuery');
const showQuery = document.getElementById('showQuery');

const forms_definitions_uid = document.getElementById('forms_definitions_uid');
const licensee_code = document.getElementById('licensee_code');
const add_date_time = 'getdate()';
const added_by = document.getElementById('added_by');
const begin_date = document.getElementById('begin_date');
const change_date_time = 'getdate()'
const changed_by = document.getElementById('changed_by');
const end_date = document.getElementById('end_date');
const file_name = document.getElementById('file_name');
const form_code = document.getElementById('form_code');
const form_code_alt = document.getElementById('form_code_alt');
const form_list_order = document.getElementById('form_list_order');
const form_name = document.getElementById('form_name');
const form_name_print = document.getElementById('form_name_print');
const form_number = document.getElementById('form_number');
const group_print_order = document.getElementById('group_print_order');
const include_in_forms_list = document.getElementById('include_in_forms_list');
const internal_use_only_flag = document.getElementById('internal_use_only_flag');


// console.log(begin_date.value.split('-')[1] + '/' + begin_date.value.split('-')[2] + '/' + begin_date.value.split('-')[0]);


const formatDate = (date) => {
    return date.split('-')[1] + '/' + date.split('-')[2] + '/' + date.split('-')[0]; 
};

const generateQuery = (e) => {
    finalQuery.value = 
    `IF NOT EXISTS (SELECT 1 FROM forms_definitions  WHERE   forms_definitions_uid = '${forms_definitions_uid.value}' and licensee_code = '${licensee_code.value}')
     BEGIN
     INSERT  INTO forms_definitions ( forms_definitions_uid, licensee_code, add_date_time, added_by, begin_date, change_date_time, 
        changed_by, end_date, file_name, form_code, form_code_alt, form_list_order, form_name, form_name_print, form_number, group_print_order, 
        include_in_forms_list, include_on_policy_dec, internal_use_only_flag, module, object_name, output_codes, owner_object, parameters_to_pass, 
        parent_name, production_order, revision_date, security_profile_code, state_code, sub_parent_name_1, sub_parent_name_2, sub_parent_name_3, 
        sub_parent_name_4, user_input_flag, template_type, mapping_xml, product_group, sign_supported, include_in_merge, output_file_name_prefix, form_code_to_print)
        VALUES ('${forms_definitions_uid.value.trim()}', '${licensee_code.value.trim()}', ${add_date_time}, '${added_by.value.trim()}', '${formatDate(begin_date.value)}', ${change_date_time}, '${changed_by.value.trim()}', ${end_date.value === '' ? 'null' : "'" + formatDate(end_date.value) + "'"}, '${file_name.value.trim()}', '${form_code.value.trim()}', '${form_code_alt.value.trim()}', '${form_list_order.value === '' ? '0' : form_list_order.value}', '${form_name.value.trim()}', '${form_name_print.value.trim()}', '${form_number.value.trim()}', '${group_print_order.value.trim()}', 
        '${include_in_forms_list.value}', '${include_on_policy_dec.value}', '${internal_use_only_flag.value}')
END    
    `;
        showQuery.classList.remove('d-none');

};

generate.addEventListener('click', generateQuery);


