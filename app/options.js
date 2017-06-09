/**
 Copyright 2017 NCC Group PLC http://www.nccgroup.trust/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

(function() {
  init();

  function getGaEnabledCheckbox() {
    return document.getElementById('gaEnabled');
  }

  function toggleGaEnabled(event) {
    let options = JSON.parse(localStorage.getItem('options') || '{}');
    options.gaEnabled = event.target.checked;
    localStorage.setItem('options', JSON.stringify(options));
  }

  function init() {
    let options = JSON.parse(localStorage.getItem('options') || '{}');
    getGaEnabledCheckbox().checked = options.gaEnabled !== false;
    getGaEnabledCheckbox().addEventListener('click', toggleGaEnabled, false);
  }
}());
