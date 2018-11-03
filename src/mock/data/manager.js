import Mock from 'mockjs';

const Relationship = {
      'name': 'GPB',
      'title': 'AUM: $55bn<br\>Client#: 100,000',
      'className': 'manager',
      'children': [ {
              'name': 'HK',
              'title': 'AUM: $45bn<br\>Client#: 70,000',
              'className': 'product-dept',
              'children': [{
                  'name': 'HK Team1',
                  'title': 'AUM: $45bn<br\>Client#: 70,000',
                  'className': 'rd-dept',
                  'children': [{
                      'name': 'HK RM1',
                      'title': 'AUM: $45bn<br\>Client#: 70,000',
                      'className': 'frontend1'
                  }, {
                      'name': 'HK RM2',
                      'title': 'AUM: $45bn<br\>Client#: 70,000',
                      'className': 'frontend1'
                  }]
              },{
                'name': 'HK Team2',
                'title': 'AUM: $45bn<br\>Client#: 70,000',
                'className': 'rd-dept',
              }]
      },{
          'name': 'SG',
          'title': 'AUM: $45bn<br\>Client#: 70,000',
          'className': 'middle-level',
          'children': [{
              'name': 'SG Team1',
              'title': 'AUM: $45bn<br\>Client#: 70,000',
              'className': 'rd-dept'
          },{
              'name': 'SG Team2',
              'title': 'AUM: $45bn<br\>Client#: 70,000',
              'className': 'rd-dept'
          }]
      }]
  };


export { Relationship };
