import {validation} from '../../util/validation';
import IdentityService from '../../service/IdentityService';
import {identityKey} from "../../model/identityKey";
import {carrierList} from "../../model/carrierList";

function SelectBox(key, identityService, nextFocusTarget) {
  const options = [1,2,3,4];
  const div = document.createElement('div');
  const spanDiv = document.createElement('div');
  const span = document.createElement('span');
  const selectBoxDiv = document.createElement('div');
  const selectBox = document.createElement('select');

  div.className = 'box-div';
  selectBoxDiv.className = 'input-div';

  carrierList.map(carrier => {
    const option = document.createElement('option');
    option.value = carrier.code;
    option.text = carrier.description;

    selectBox.appendChild(option);
  });

  identityService.setIdentityProps('carrierCode', carrierList[0].code);

  /** onchange */
  selectBox.onchange = e => {
    identityService.setIdentityProps('carrierCode', e.target.value);
    document.getElementById(nextFocusTarget).focus();
  };

  span.innerHTML = identityKey[key];
  spanDiv.appendChild(span);
  selectBoxDiv.appendChild(selectBox);
  div.appendChild(spanDiv);
  div.appendChild(selectBoxDiv);
  return div;

}

export default SelectBox;